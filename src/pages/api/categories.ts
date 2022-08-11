// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

import data from 'constants/data.json'
import { Categories } from 'constants/types'

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Categories>
) {
  return res.status(200).json(data)
}
