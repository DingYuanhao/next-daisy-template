// import { FormInstance } from "./Form";

export interface CustomFormItemProps {
  type?: "input" | "select" | "radio";
  password?: boolean;
  label: string;
  name: string;
  hidden?: boolean;
}

export const FormItem = (params: CustomFormItemProps) => {
  const { type = "input", label, password = false, hidden = false } = params;
  const ph = "请输入" + label;
  return (
    <label className="form-control">
      <div className="label">
        <span className="label-text">{label}</span>
      </div>
      <input
        className="input input-bordered max-w-sm"
        type={password ? "password" : "text"}
        placeholder={ph}
      />
    </label>
  );
};

export const renderFormItems = (items: CustomFormItemProps[]) => {
  return items
    .filter((i) => !i.hidden)
    .map((item) => {
      return <FormItem {...item} key={item.name} />;
    });
};
