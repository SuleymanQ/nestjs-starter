import { RouterOptions, initContract } from '@ts-rest/core';
import { nestControllerContract } from '@ts-rest/nest';
import { z } from 'zod';

const contract = initContract();

export const c = nestControllerContract(
  contract.router(
    {
      getHello: {
        method: 'GET',
        path: '/',
        responses: {
          200: z.string(),
          404: z.object({
            message: z.string(),
          }),
        },
      },
    },
    {
      strictStatusCodes: true,
    } satisfies RouterOptions,
  ),
);
