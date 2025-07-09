declare module "*module.scss" {
  const styles: { [key: string]: string };
  export default styles;
}

declare module "*.svg" {
  const ReactComponent: React.FC<React.SVGProps<SVGSVGElement>>;
  export { ReactComponent };
}
