import { monggoseTransformBasic } from './mongoose.transform.basic';

export const mongooseToJsonBasic = {
  toJSON: {
    transform: monggoseTransformBasic,
  },
};
