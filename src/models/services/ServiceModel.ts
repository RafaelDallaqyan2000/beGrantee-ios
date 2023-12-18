export interface ServiceModel {
  productName?: string;
  productBackgroundColor?: string;
  companyName: string;
  companyLogo?: string | undefined;
  imagePath: string | undefined;
  coverPhoto?: string;
  id: number;
  name: string;
  typeId: number;
  typeName: string;
  company: string;
  shortDescription: string;
  companyId?: number;
}
