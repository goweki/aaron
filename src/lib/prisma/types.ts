import {
  User as _User,
  Asset as _Asset,
  AudioFingerprint as _AudioFingerprint,
} from "@prisma/client";

// extends the User to include the assets relation
export type User = _User & {
  assets?: _Asset[];
};

export type Asset = _Asset & {
  administrator?: User;
  interestedUsers?: User[];
  fingerprint?: _AudioFingerprint;
};
