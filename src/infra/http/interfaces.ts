export interface HttpClientConfig {
  get<T>(url: string, options?: RequestInit): Promise<T>;
}
