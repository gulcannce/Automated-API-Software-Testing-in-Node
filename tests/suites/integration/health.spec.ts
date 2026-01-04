import { describe, it, expect } from "vitest";
import nock from 'nock'
import { ApiClient } from "../../utils/http/api-client";
import { BASE_URL } from "../../config/endpoints";

describe("Health", () => {
  it("GET /health returns 200", async () => {
    const api = new ApiClient({ baseUrl: BASE_URL });

    // Mock the health response
    nock(BASE_URL)
      .get('/health')
      .reply(200, { status: 'ok' })

    const { res, json } = await api.request("/health");
    expect(res.status).toBe(200);
    expect(json.status).toBe('ok')
  });
});