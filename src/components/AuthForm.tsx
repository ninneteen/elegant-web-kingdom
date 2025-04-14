
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Eye, EyeOff } from "lucide-react";

type AuthFormProps = {
  mode: "login" | "register";
  onSubmit: (formData: any) => void;
  isLoading: boolean;
};

const AuthForm = ({ mode, onSubmit, isLoading }: AuthFormProps) => {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    rememberMe: false,
    acceptTerms: false,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleCheckboxChange = (name: string, checked: boolean) => {
    setFormData((prev) => ({
      ...prev,
      [name]: checked,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {mode === "register" && (
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label htmlFor="firstName" className="block text-sm font-medium text-gray-700">
              ชื่อ
            </label>
            <Input
              type="text"
              name="firstName"
              id="firstName"
              required
              placeholder="ชื่อ"
              value={formData.firstName}
              onChange={handleChange}
              className="mt-1 block w-full border-gray-300"
            />
          </div>
          <div>
            <label htmlFor="lastName" className="block text-sm font-medium text-gray-700">
              นามสกุล
            </label>
            <Input
              type="text"
              name="lastName"
              id="lastName"
              required
              placeholder="นามสกุล"
              value={formData.lastName}
              onChange={handleChange}
              className="mt-1 block w-full border-gray-300"
            />
          </div>
        </div>
      )}

      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-700">
          อีเมล
        </label>
        <Input
          type="email"
          name="email"
          id="email"
          required
          placeholder="example@email.com"
          value={formData.email}
          onChange={handleChange}
          className="mt-1 block w-full border-gray-300"
        />
      </div>

      <div>
        <div className="flex justify-between items-center">
          <label htmlFor="password" className="block text-sm font-medium text-gray-700">
            รหัสผ่าน
          </label>
          {mode === "login" && (
            <a href="#" className="text-sm text-primary hover:text-primary/90">
              ลืมรหัสผ่าน?
            </a>
          )}
        </div>
        <div className="mt-1 relative">
          <Input
            type={showPassword ? "text" : "password"}
            name="password"
            id="password"
            required
            placeholder="••••••••"
            value={formData.password}
            onChange={handleChange}
            className="block w-full border-gray-300"
          />
          <button
            type="button"
            onClick={toggleShowPassword}
            className="absolute inset-y-0 right-0 pr-3 flex items-center"
          >
            {showPassword ? (
              <EyeOff className="h-5 w-5 text-gray-400" />
            ) : (
              <Eye className="h-5 w-5 text-gray-400" />
            )}
          </button>
        </div>
        {mode === "register" && (
          <p className="mt-1 text-xs text-gray-500">รหัสผ่านต้องมีความยาวอย่างน้อย 8 ตัวอักษร</p>
        )}
      </div>

      {mode === "register" && (
        <div>
          <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700">
            ยืนยันรหัสผ่าน
          </label>
          <div className="mt-1 relative">
            <Input
              type={showPassword ? "text" : "password"}
              name="confirmPassword"
              id="confirmPassword"
              required
              placeholder="••••••••"
              value={formData.confirmPassword}
              onChange={handleChange}
              className="block w-full border-gray-300"
            />
          </div>
        </div>
      )}

      {mode === "login" ? (
        <div className="flex items-center">
          <div className="flex items-center">
            <Checkbox 
              id="remember-me" 
              checked={formData.rememberMe}
              onCheckedChange={(checked) => 
                handleCheckboxChange("rememberMe", checked as boolean)
              }
            />
            <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900">
              จดจำฉันไว้ในระบบ
            </label>
          </div>
        </div>
      ) : (
        <div className="flex items-start">
          <div className="flex items-center h-5">
            <Checkbox 
              id="accept-terms" 
              checked={formData.acceptTerms}
              onCheckedChange={(checked) => 
                handleCheckboxChange("acceptTerms", checked as boolean)
              }
            />
          </div>
          <div className="ml-3 text-sm">
            <label htmlFor="accept-terms" className="text-gray-700">
              ยินยอมรับ <a href="#" className="text-primary hover:underline">เงื่อนไขการใช้บริการ</a> และ <a href="#" className="text-primary hover:underline">นโยบายความเป็นส่วนตัว</a>
            </label>
          </div>
        </div>
      )}

      <div>
        <Button
          type="submit"
          disabled={isLoading}
          className="w-full py-2.5 bg-gray-900 hover:bg-gray-800 text-white rounded-md"
        >
          {isLoading
            ? mode === "login"
              ? "กำลังดำเนินการ..."
              : "กำลังดำเนินการ..."
            : mode === "login"
            ? "เข้าสู่ระบบ"
            : "สร้างบัญชี"}
        </Button>
      </div>
    </form>
  );
};

export default AuthForm;
