import { describe, it, expect, vi } from "vitest";

import {getTasksLists} from "../getTasksLists";
import {API_ENDPOINT} from "../../constants";

// @ts-ignore
global.fetch = vi.fn()

describe('getTasksLists', () => {
  it('should return an array of task groups if the API call is successful', async () => {
    const mockResponse = [{ id: 1, name: 'Group 1' }, { id: 2, name: 'Group 2' }];
    vi.mock("node-fetch");
    // @ts-ignore
    fetch.mockReturnValue(
      Promise.resolve({ json: () => Promise.resolve(mockResponse) , status: 200})
    );

    const result = await getTasksLists();
    expect(result).toEqual(mockResponse);
    expect(fetch).toHaveBeenCalledTimes(1);
    expect(fetch).toHaveBeenCalledWith(API_ENDPOINT);
  });

  it('should return an empty array if the API call fails', async () => {
    vi.mock("node-fetch");
    // @ts-ignore
    fetch.mockReturnValue(new Error('API error'));

    const result = await getTasksLists();
    expect(result).toEqual([]);
    expect(fetch).toHaveBeenCalledWith(API_ENDPOINT);
  });
});
