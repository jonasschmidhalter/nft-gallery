# NFT Gallery Setup Guide

## Requirements

node - v16 or higher
npm - v6 or higher

Check with
```sh
node -v
npm -v
```

## Setup

### Installation

Pull the project and run:
```sh
npm install
```

Compile the SCSS to uncompressed CSS with:
```sh
npm run sass-dev
```
For production use: compile the SCSS to compressed CSS with:
```sh
npm run sass-prod
```

### Customization

Customize Colors and Fonts in the following file: `/assets/scss/base/_variables.scss`

For custom Fonts, add them to the file:  `/assets/scss/base/_fonts.scss` (best with an @import statement)

### Content

Add your content directly in the HTML file `index.html`

To add new elements to your gallery, dubplicate the div with the class `galleryItem` and adjust the necessary information with your own information. The single view modal is automatically generated from the information you add in following divs:
```sh
.gallery__item-title        // Title of the NFT
.gallery__item-author       // Author of the NFT
.gallery__item-description  // Description of the NFT
.gallery__item-link         // Link to the NFT

.price                      // Price of the NFT in ETH
.link-list                  // External Links to the NFT
```

### Videos / Images
You can add a video (MP4) or an image to your NFT gallery. To do so, add the following divs to your `galleryItem`:
```sh
.gallery__item-video        // Video tag 
.gallery__item-image        // Image
```

## Deploy to any hoster and enjoy



