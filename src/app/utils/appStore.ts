/**
 * Apple App Store configuration and cross-region linking utility
 */
export const APP_STORE_CONFIG = {
  APP_ID: '6790411464',
  APP_NAME: 'bagel-muse',
  /**
   * Official universal link without country prefix:
   * Apple automatically routes visitors to their local App Store storefront based on account region and IP.
   */
  URL: 'https://apps.apple.com/app/bagel-muse/id6790411464',
  FALLBACK_URL: 'https://apps.apple.com/app/id6790411464',
} as const;

export const APP_STORE_URL = APP_STORE_CONFIG.URL;

/**
 * Opens the App Store download link in a new window / native App Store app.
 */
export function openAppStore(): void {
  window.open(APP_STORE_URL, '_blank', 'noopener,noreferrer');
}
