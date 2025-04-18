import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "@/context/AuthContext";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { UserCog, Settings, LogOut, Palette, Mail, Phone, PhoneCall } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import ThemeSelector from "@/components/ThemeSelector";
import { useTheme } from "@/context/ThemeContext";

const Profile = () => {
  const { user, isAuthenticated, logout } = useAuth();
  const { currentTheme } = useTheme();
  const navigate = useNavigate();
  const { toast } = useToast();
  const [phoneNumber, setPhoneNumber] = useState("");
  const [isEmailVerified, setIsEmailVerified] = useState(false);
  const [isPhoneVerified, setIsPhoneVerified] = useState(false);

  useEffect(() => {
    if (!isAuthenticated) {
      navigate("/login");
    }
  }, [isAuthenticated, navigate]);

  if (!isAuthenticated || !user) {
    return null;
  }

  const getInitials = (name: string) => {
    return name
      .split(" ")
      .map((n) => n[0])
      .join("")
      .toUpperCase();
  };

  const handleEmailVerification = () => {
    setIsEmailVerified(true);
    toast({
      title: "ส่งอีเมลยืนยันแล้ว",
      description: "กรุณาตรวจสอบอีเมลของคุณเพื่อยืนยันตัวตน",
    });
  };

  const handlePhoneVerification = () => {
    if (!phoneNumber) {
      toast({
        title: "กรุณากรอกเบอร์โทรศัพท์",
        description: "คุณต้องกรอกเบอร์โทรศัพท์ก่อนทำการยืนยัน",
        variant: "destructive",
      });
      return;
    }
    setIsPhoneVerified(true);
    toast({
      title: "ส่ง SMS ยืนยันแล้ว",
      description: "กรุณาตรวจสอบ SMS ของคุณเพื่อยืนยันตัวตน",
    });
  };

  const handleLogout = () => {
    logout();
    toast({
      title: "ออกจากระบบสำเร็จ",
      description: "คุณได้ออกจากระบบเรียบร้อยแล้ว",
    });
  };

  return (
    <div 
      className={`min-h-screen py-20 px-4 sm:px-6 lg:px-8 ${
        currentTheme === 'rainbow' 
          ? 'rainbow-bg' 
          : 'bg-background'
      }`}
    >
      <div className="max-w-4xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="md:col-span-1">
            <Card>
              <CardContent className="p-6">
                <div className="flex flex-col items-center text-center">
                  <Avatar className="h-24 w-24 mb-4">
                    <AvatarImage src="/placeholder.svg" alt={user.name} />
                    <AvatarFallback className="text-lg bg-primary text-white">
                      {getInitials(user.name)}
                    </AvatarFallback>
                  </Avatar>
                  <h3 className="text-xl font-bold">{user.name}</h3>
                  <p className="text-gray-500 mb-4">{user.email}</p>
                  <div className="w-full space-y-2">
                    <ThemeSelector />
                    <Button 
                      variant="outline" 
                      className="w-full flex items-center justify-center gap-2"
                      onClick={() => navigate("/profile/edit")}
                    >
                      <UserCog size={16} />
                      แก้ไขโปรไฟล์
                    </Button>
                    <Button 
                      variant="outline" 
                      className="w-full flex items-center justify-center gap-2"
                    >
                      <Settings size={16} />
                      ตั้งค่า
                    </Button>
                    <Button 
                      variant="destructive" 
                      className="w-full flex items-center justify-center gap-2"
                      onClick={handleLogout}
                    >
                      <LogOut size={16} />
                      ออกจากระบบ
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="md:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle>โปรไฟล์ของฉัน</CardTitle>
                <CardDescription>
                  จัดการข้อมูลส่วนตัวและการตั้งค่าบัญชีของคุณ
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Tabs defaultValue="account" className="w-full">
                  <TabsList className="mb-4">
                    <TabsTrigger value="account">บัญชี</TabsTrigger>
                    <TabsTrigger value="security">ความปลอดภัย</TabsTrigger>
                    <TabsTrigger value="notifications">การแจ้งเตือน</TabsTrigger>
                    <TabsTrigger value="privacy">ความเป็นส่วนตัว</TabsTrigger>
                  </TabsList>
                  
                  <TabsContent value="account">
                    <div className="space-y-4">
                      <div>
                        <h4 className="text-sm font-medium text-gray-500">อีเมล</h4>
                        <div className="mt-1 flex items-center gap-4">
                          <div className="flex items-center gap-2 bg-gray-100 px-3 py-2 rounded-md">
                            <Mail size={16} className="text-gray-600" />
                            <span className="text-gray-800 font-medium">{user.email}</span>
                          </div>
                          <Button 
                            variant={isEmailVerified ? "ghost" : "outline"} 
                            size="sm"
                            className="flex items-center gap-2"
                            onClick={handleEmailVerification}
                            disabled={isEmailVerified}
                          >
                            {isEmailVerified ? "ยืนยันแล้ว" : "ยืนยันอีเมล"}
                          </Button>
                        </div>
                      </div>
                      <div>
                        <h4 className="text-sm font-medium text-gray-500">เบอร์โทรศัพท์</h4>
                        <div className="mt-1 flex items-center gap-4">
                          <div className="flex items-center bg-gray-100 rounded-md overflow-hidden">
                            <div className="px-3 py-2 bg-gray-200">
                              <PhoneCall size={16} className="text-gray-600" />
                            </div>
                            <Input
                              type="tel"
                              placeholder="กรอกเบอร์โทรศัพท์"
                              value={phoneNumber}
                              onChange={(e) => setPhoneNumber(e.target.value)}
                              className="border-none focus:ring-0 bg-transparent w-[200px]"
                            />
                          </div>
                          <Button 
                            variant={isPhoneVerified ? "ghost" : "outline"} 
                            size="sm"
                            className="flex items-center gap-2"
                            onClick={handlePhoneVerification}
                            disabled={isPhoneVerified}
                          >
                            {isPhoneVerified ? "ยืนยันแล้ว" : "ยืนยันเบอร์โทร"}
                          </Button>
                        </div>
                      </div>
                      <div>
                        <h4 className="text-sm font-medium text-gray-500">ชื่อผู้ใช้</h4>
                        <p className="mt-1">{user.name}</p>
                      </div>
                      <div>
                        <h4 className="text-sm font-medium text-gray-500">รหัสผู้ใช้</h4>
                        <p className="mt-1">{user.id}</p>
                      </div>
                      <div>
                        <h4 className="text-sm font-medium text-gray-500">วันที่สมัคร</h4>
                        <p className="mt-1">17 เมษายน 2567</p>
                      </div>
                    </div>
                  </TabsContent>
                  
                  <TabsContent value="security">
                    <div className="space-y-4">
                      <div className="border rounded-lg p-4">
                        <h4 className="font-medium">เปลี่ยนรหัสผ่าน</h4>
                        <p className="text-sm text-gray-500 mt-1">
                          เราขอแนะนำให้ใช้รหัสผ่านที่ซับซ้อนที่คุณไม่ได้ใช้ที่อื่น
                        </p>
                        <Button className="mt-4" variant="outline" size="sm">
                          อัพเดทรหัสผ่าน
                        </Button>
                      </div>
                      <div className="border rounded-lg p-4">
                        <h4 className="font-medium">การยืนยันสองขั้นตอน</h4>
                        <p className="text-sm text-gray-500 mt-1">
                          เพิ่มความปลอดภัยให้บัญชีของคุณด้วยการยืนยันตัวตนขั้นที่สอง
                        </p>
                        <Button className="mt-4" variant="outline" size="sm">
                          เปิดใช้งาน 2FA
                        </Button>
                      </div>
                    </div>
                  </TabsContent>
                  
                  <TabsContent value="notifications">
                    <div className="space-y-4">
                      <p className="text-sm text-gray-500">
                        กำหนดว่าคุณต้องการรับการแจ้งเตือนประเภทใดและวิธีการรับการแจ้งเตือน
                      </p>
                      <div className="border rounded-lg p-4">
                        <h4 className="font-medium">การแจ้งเตือนอีเมล</h4>
                        <p className="text-sm text-gray-500 mt-1">
                          ขณะนี้คุณได้ลงทะเบียนรับอีเมลสำหรับการอัปเดตความปลอดภัยและการแจ้งเตือนผลิตภัณฑ์
                        </p>
                        <Button className="mt-4" variant="outline" size="sm">
                          จัดการการตั้งค่าอีเมล
                        </Button>
                      </div>
                    </div>
                  </TabsContent>
                  
                  <TabsContent value="privacy">
                    <div className="space-y-4">
                      <div className="border rounded-lg p-4">
                        <h4 className="font-medium">การเข้าถึงข้อมูล</h4>
                        <p className="text-sm text-gray-500 mt-1">
                          จัดการการเข้าถึงข้อมูลส่วนตัวของคุณและการแชร์ข้อมูล
                        </p>
                        <Button className="mt-4" variant="outline" size="sm">
                          ตั้งค่าความเป็นส่วนตัว
                        </Button>
                      </div>
                    </div>
                  </TabsContent>
                </Tabs>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
