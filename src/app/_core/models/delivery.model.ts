export class Delivery {
  id?: number;
  title?: string;
  subTitle?: string;
  address?: string;
  phone?: string;
  category?: number;
  logoImg?: string;
  backgroundImg?: string;
  description?: string;
  city?: string;
  caracteristique?: DeliveryCaracteristique[];
}

export class DeliveryCaracteristique {
  id?: number;
  title?: string;
  icon?: string;
}
