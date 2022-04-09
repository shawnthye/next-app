// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import PetCat from '../../js/@core/data/PetCat';

type Data = {
  name: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>,
) {
  if (!PetCat.isInitialized) {
    await PetCat.initialize();
  }

  res.status(200).json({ name: `John Does ${PetCat.isInitialized}` });
}
