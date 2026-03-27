# AWS Infrastructure Setup

Region: **us-east-1** (N. Virginia — closest AWS region to NYC)

## S3 Bucket

1. Create a bucket (block all public access — CloudFront will be the only origin)
2. Enable **Static website hosting** — index document: `index.html`, error document: `404/index.html`
3. Apply `s3-bucket-policy.json` (replace placeholders with your values)

## CloudFront Distribution

| Setting | Value |
|---|---|
| Origin domain | `<bucket>.s3.us-east-1.amazonaws.com` |
| Origin access | **Origin Access Control (OAC)** — not OAI |
| Viewer protocol | Redirect HTTP → HTTPS |
| Compress objects | Yes |
| Price class | Use only US, Mexico, Canada (cheapest for NYC traffic) |
| Alternate domain names | `www.laundryandco.com`, `laundryandco.com` |
| SSL certificate | ACM cert in **us-east-1** |
| Default root object | `index.html` |
| Cache policy | CachingOptimized (for assets) |
| Response headers policy | Apply `cloudfront-response-headers-policy.json` |

### Custom Error Pages

| HTTP Error Code | Response Page Path | Response Code |
|---|---|---|
| 403 | `/404/index.html` | 404 |
| 404 | `/404/index.html` | 404 |

## GitHub Actions Secrets & Variables

Set these in your repo → Settings → Secrets and variables → Actions:

**Secrets:**
- `AWS_ACCESS_KEY_ID`
- `AWS_SECRET_ACCESS_KEY`

**Variables:**
- `S3_BUCKET_NAME` — your S3 bucket name
- `CLOUDFRONT_DISTRIBUTION_ID` — your CloudFront distribution ID
- `SITE_URL` — `https://www.laundryandco.com`

## IAM Policy for GitHub Actions User

```json
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Effect": "Allow",
      "Action": ["s3:PutObject", "s3:GetObject", "s3:DeleteObject", "s3:ListBucket"],
      "Resource": [
        "arn:aws:s3:::YOUR-BUCKET-NAME",
        "arn:aws:s3:::YOUR-BUCKET-NAME/*"
      ]
    },
    {
      "Effect": "Allow",
      "Action": "cloudfront:CreateInvalidation",
      "Resource": "arn:aws:cloudfront::YOUR-ACCOUNT-ID:distribution/YOUR-DISTRIBUTION-ID"
    }
  ]
}
```
