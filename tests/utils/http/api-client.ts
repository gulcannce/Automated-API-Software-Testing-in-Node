type ApiClientOptions = {
  baseUrl: string;
  defaultHeaders?: Record<string, string>;
};

export class ApiClient {
  constructor(private opts: ApiClientOptions) {}

  async request(path: string, init: RequestInit = {}) {
    const url = this.opts.baseUrl.replace(/\/$/, "") + path;
    const headers = {
      "content-type": "application/json",
      ...(this.opts.defaultHeaders ?? {}),
      ...(init.headers ?? {}),
    };

    const res = await fetch(url, { ...init, headers });
    const text = await res.text();
    const json = text ? safeJson(text) : null;

    return { res, json, text };
  }

  async get(path: string, init: RequestInit = {}) {
    return this.request(path, { ...init, method: 'GET' });
  }

  async post(path: string, data?: any, init: RequestInit = {}) {
    const body = data ? JSON.stringify(data) : undefined;
    return this.request(path, { ...init, method: 'POST', body });
  }

  async put(path: string, data?: any, init: RequestInit = {}) {
    const body = data ? JSON.stringify(data) : undefined;
    return this.request(path, { ...init, method: 'PUT', body });
  }

  async delete(path: string, init: RequestInit = {}) {
    return this.request(path, { ...init, method: 'DELETE' });
  }
}

function safeJson(text: string) {
  try { return JSON.parse(text); } catch { return null; }
}