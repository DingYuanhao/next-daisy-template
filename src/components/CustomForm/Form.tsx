import { useEffect, useState } from "react"

export interface FormInstance {
  children: React.ReactNode;
}

export const Form = (params: FormInstance) => {
  const { children } = params;
  const [fieldList, setFieldList] = useState<any>({});
  useEffect(() => {
    const fieldL: any = {};
    children.forEach((child: any) => {
      if (child.props.field) {
        const key = child.props.field;
        fieldL[key] = {};
      }
    });
    setFieldList(fieldL);
  }, []);
}