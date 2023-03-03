import { NextApiRequest, NextApiResponse } from 'next';
import handler from 'pages/api/share/plus';
import { expect, jest, test } from '@jest/globals';

jest.mock('supabase', () => ({
  from: jest.fn(() => ({
    insert: jest.fn(() => ({
      status: 200,
      error: null,
      statusText: 'OK',
    })),
  })),
}));

describe('handler', () => {
  let req: NextApiRequest;
  let res: NextApiResponse;

  beforeEach(() => {
    req = {} as NextApiRequest;
    res = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn().mockReturnThis(),
      setHeader: jest.fn().mockReturnThis(),
      end: jest.fn().mockReturnThis(),
    } as unknown as NextApiResponse;
  });

  it('should return "Ok" message with status 200 if insert succeeds', async () => {
    req.method = 'POST';
    req.url = '/test';
    await handler(req, res);

    expect(res.status).toHaveBeenCalledWith(200);
    expect(res.json).toHaveBeenCalledWith({ message: 'Ok' });
  });

  it('should return status and message from supabase error if insert fails', async () => {
    const errorMessage = 'Some error message';

    const supabaseMock = require('supabase');

    // mock the behavior of the insert function to return an error
    supabaseMock.from.mockReturnValueOnce({
      insert: jest.fn().mockImplementationOnce(() => ({
        status: 400,
        error: true,
        statusText: errorMessage,
      })),
    });

    req.method = 'POST';
    req.url = '/test';
    await handler(req, res);

    expect(res.status).toHaveBeenCalledWith(400);
    expect(res.json).toHaveBeenCalledWith(errorMessage);
  });

  it('should return status 405 and allowed methods if method is not POST', async () => {
    const supabaseMock = require('supabase');

    // mock the behavior of the insert function to return an error
    supabaseMock.from.mockReturnValueOnce({
      insert: jest.fn().mockImplementationOnce(() => ({
        status: 405,
        error: true,
        statusText: 'Method GET Not Allowed',
      })),
    });

    req.method = 'GET';
    await handler(req, res);

    expect(res.setHeader).toHaveBeenCalledWith('Allow', ['GET']);
    expect(res.status).toHaveBeenCalledWith(405);
    expect(res.end).toHaveBeenCalledWith(`Method GET Not Allowed`);
  });
});
