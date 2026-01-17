import './globals.css'

export const metadata = {
  title: 'WikiNITT',
  description: 'NIT Trichy Wikipedia',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
```
- Commit changes

**If `layout.js` DOES NOT EXIST:**
- Click "Add file" → "Create new file"
- Name it: `layout.js`
- Paste the code above
- Commit

---

### STEP 2: Check Your Folder Structure

Your repository should look like this:
```
wikinitt-nextjs/
├── app/
│   ├── layout.js ✅
│   ├── page.js ✅
│   └── globals.css ✅
├── package.json ✅
├── tailwind.config.js ✅
└── postcss.config.js ✅
