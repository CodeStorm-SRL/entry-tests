interface Urls {
  full: string;
  raw: string;
  regular: string;
  small: string;
  small_s3: string;
  thumb: string;
}

interface Artist {
  bio: string;
  name: string;
  id: string;
  instagram_username: string;
  location: string;
}

export interface ImageObjectInterface {
  id: string;
  height: number;
  width: number;
  created_at: string;
  alt_description: string;
  description: string;
  urls: Urls;
  user: Artist;
}

export async function getImages() {
  try {
    const res = await fetch(
      "https://api.unsplash.com/photos/?client_id=MW4zPeUx24HV-sVfEgTec13QPzwwBPGkNMGgb0lvnbg"
    );

    if (res.ok) {
      const data = await res.json();
      // console.log(data);
      return data;
    }
  } catch {
    throw new Error("Error");
  }
}
