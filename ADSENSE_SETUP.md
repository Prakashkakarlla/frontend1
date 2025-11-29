# Google AdSense Setup Instructions

## Step 1: Sign Up for Google AdSense

1. Go to [Google AdSense](https://www.google.com/adsense)
2. Click "Get Started" and sign in with your Google account
3. Fill in your website information:
   - URL: Your domain name (e.g., `yourjobboard.com`)
   - Language: English
4. Submit your application

## Step 2: Add Your Site for Verification

1. After signing up, AdSense will provide you with a verification code
2. The code is already added to `index.html` - you just need to replace the placeholder

## Step 3: Get Your Publisher ID

1. Once logged into AdSense, find your Publisher ID in the top right
2. It looks like: `ca-pub-XXXXXXXXXXXXXXXX`
3. Copy this ID

## Step 4: Update the Code

Replace `ca-pub-XXXXXXXXXXXXXXXX` with your actual Publisher ID in these files:

### 1. `index.html`
```html
<meta name="google-adsense-account" content="ca-pub-YOUR_ACTUAL_ID">
<script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-YOUR_ACTUAL_ID"
```

### 2. `src/components/AdSense.jsx`
```javascript
adClient = 'ca-pub-YOUR_ACTUAL_ID'
```

## Step 5: Create Ad Units

1. In AdSense dashboard, go to "Ads" → "By ad unit"
2. Click "+ New ad unit"
3. Create these ad units:

### Banner Ad (Home Page)
- **Type**: Display ad
- **Format**: Horizontal
- **Name**: "Homepage Banner"
- Copy the Ad Slot ID

### In-Feed Ad (Home Page)
- **Type**: In-feed ad
- **Format**: Fluid
- **Name**: "Job Listings Feed"
- Copy the Ad Slot ID

### In-Article Ad (Job Details)
- **Type**: In-article ad
- **Format**: Fluid
- **Name**: "Job Details Content"
- Copy the Ad Slot ID

### Sidebar Ad (Job Details - Desktop)
- **Type**: Display ad
- **Format**: Vertical
- **Name**: "Job Details Sidebar"
- **Size**: 300x600 or responsive
- Copy the Ad Slot ID

## Step 6: Update Ad Slot IDs

Replace the placeholder slot IDs in the code:

### `HomePage.jsx`
```javascript
// Banner ad
adSlot="YOUR_BANNER_SLOT_ID"  // Replace 1234567890

// In-feed ad
adSlot="YOUR_INFEED_SLOT_ID"  // Replace 0987654321
```

### `JobDetailsPage.jsx`
```javascript
// In-content ad
adSlot="YOUR_ARTICLE_SLOT_ID"  // Replace 1122334455

// Sidebar ad
adSlot="YOUR_SIDEBAR_SLOT_ID"  // Replace 5544332211
```

## Step 7: Wait for Approval

- AdSense typically reviews sites within 1-2 days
- During review, ads won't show (or will show blank spaces)
- Once approved, ads will start appearing automatically

## Step 8: Monitor Performance

1. Check AdSense dashboard regularly
2. Track:
   - Page views
   - Ad impressions
   - Click-through rate (CTR)
   - Earnings

## Important Notes

⚠️ **Ad Policy Compliance**
- Don't click your own ads
- Don't ask users to click ads
- Ensure content meets AdSense policies
- Keep ad-to-content ratio reasonable

✅ **Best Practices**
- Ad placements are already optimized for mobile
- In-feed ads appear every 4 jobs (not too intrusive)
- Sidebar ads are hidden on mobile for better UX
- All ads are responsive

## Troubleshooting

**Ads not showing?**
- Check that your site is approved
- Verify Publisher ID is correct
- Check console for errors
- Wait up to 24 hours after approval

**Blank spaces?**
- This is normal during review period
- AdSense needs time to match ads to your content
- Check that ad units are active in dashboard

## Need Help?

- [AdSense Help Center](https://support.google.com/adsense)
- [AdSense Policies](https://support.google.com/adsense/answer/48182)
- [AdSense Code Implementation](https://support.google.com/adsense/answer/9190028)
