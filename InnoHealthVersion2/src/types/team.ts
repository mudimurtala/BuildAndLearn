export interface TeamMember {
  name: string;
  role: string;
  bio: string;
  img: string;
  /** Optional longer bio for modals */
  extendedBio?: string;
}
