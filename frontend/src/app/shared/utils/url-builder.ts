import { environment } from 'src/environments/environment';

export default (url: string, base: string = environment.apiBaseUrl): string => {
  /**
   * Builds an absolute URL
   *
   * @param base {string} (Base url: Defaults to apiBaseUrl)
   * @param url: string (URL to append to base)
   */
  return new URL(url, base).href;
};
