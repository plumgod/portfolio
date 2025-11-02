# Austin Rockman Portfolio

Minimal portfolio site built with Next.js 14, React, and Tailwind CSS.

## Getting Started

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Run development server:**
   ```bash
   npm run dev
   ```

3. **Open in browser:**
   Navigate to `http://localhost:3000`

## Project Structure

```
austin-portfolio/
├── app/
│   ├── page.tsx          # Homepage
│   ├── research/         # Research page
│   ├── music/            # Music page
│   ├── about/            # About page
│   ├── layout.tsx        # Root layout with navigation
│   └── globals.css       # Global styles
├── components/
│   └── Navigation.tsx    # Tab navigation component
└── package.json
```

## Customization

- **Colors:** Edit `tailwind.config.ts` to change color scheme
- **Content:** Update each page file in `app/` directory
- **Navigation:** Modify `components/Navigation.tsx`
- **Add photos:** Place images in `public/` folder and reference them

## Deployment

### Vercel (Recommended)
1. Push code to GitHub
2. Import project at vercel.com
3. Deploy automatically

### Other Options
- Netlify
- AWS Amplify
- GitHub Pages (with static export)

## Building for Production

```bash
npm run build
npm start
```

## Notes

- Site is currently minimal black/white design
- Add your photography to `public/` folder
- Update contact info in About page
- Add more papers/albums as needed
# Updated
