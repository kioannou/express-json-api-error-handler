export const res = {
  end: jest.fn().mockReturnThis(),
  header: jest.fn().mockReturnThis(),
  json: jest.fn().mockReturnThis(),
  locals: {} as any,
  status: jest.fn().mockReturnThis(),
};