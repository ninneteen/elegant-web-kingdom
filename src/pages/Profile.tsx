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
      className={`min-h-screen py-12 px-4 sm:px-6 lg:px-8 ${
        currentTheme === 'rainbow' ? 'rainbow-bg' : 'bg-background'
      }`}
    >
      <div className="max-w-4xl mx-auto space-y-8 animate-fadeUp">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="md:col-span-1">
            <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-8">
                <div className="flex flex-col items-center text-center space-y-4">
                  <Avatar className="h-32 w-32 ring-4 ring-primary/20">
                    <AvatarImage src="/placeholder.svg" alt={user.name} />
                    <AvatarFallback className="text-2xl bg-primary text-primary-foreground">
                      {getInitials(user.name)}
                    </AvatarFallback>
                  </Avatar>
                  <div className="space-y-2">
                    <h3 className="text-2xl font-bold tracking-tight">{user.name}</h3>
                    <p className="text-muted-foreground">{user.email}</p>
                  </div>
                  <div className="w-full space-y-3 pt-4">
                    <Button
                      variant="outline"
                      className="w-full hover:bg-primary hover:text-primary-foreground transition-colors"
                      onClick={() => navigate("/profile/edit")}
                    >
                      <UserCog className="mr-2 h-4 w-4" />
                      แก้ไขโปรไฟล์
                    </Button>
                    <Button
                      variant="outline"
                      className="w-full hover:bg-primary hover:text-primary-foreground transition-colors"
                    >
                      <Settings className="mr-2 h-4 w-4" />
                      ตั้งค่า
                    </Button>
                    <Button
                      variant="destructive"
                      className="w-full hover:opacity-90 transition-opacity"
                      onClick={handleLogout}
                    >
                      <LogOut className="mr-2 h-4 w-4" />
                      ออกจากระบบ
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="md:col-span-2">
            <Card className="shadow-lg">
              <CardHeader className="space-y-1">
                <CardTitle className="text-2xl">โปรไฟล์ของฉัน</CardTitle>
                <CardDescription>
                  จัดการข้อมูลส่วนตัวและการตั้งค่าบัญชีของคุณ
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Tabs defaultValue="account" className="w-full">
                  <TabsList className="mb-6 bg-muted/50 p-1">
                    <TabsTrigger value="account">บัญชี</TabsTrigger>
                    <TabsTrigger value="Settings">ยื่นยันตัวตน</TabsTrigger>
                    <TabsTrigger value="security">ความปลอดภัย</TabsTrigger>
                    <TabsTrigger value="notifications">การแจ้งเตือน</TabsTrigger>
                    <TabsTrigger value="The">เปลี่ยนธีม</TabsTrigger>
                  </TabsList>

                  <TabsContent value="account">
                    <div className="space-y-6">
                      {[
                        { label: "ชื่อผู้ใช้", value: user.name },
                        { label: "อีเมล", value: user.email },
                        { label: "รหัสผู้ใช้", value: user.id },
                        { label: "วันที่สมัคร", value: "17 เมษายน 2567" }
                      ].map(({ label, value }) => (
                        <div key={label} className="bg-muted/30 p-4 rounded-lg">
                          <h4 className="text-sm font-medium text-muted-foreground mb-1">{label}</h4>
                          <p className="text-base font-medium">{value}</p>
                        </div>
                      ))}
                    </div>
                  </TabsContent>

                  <TabsContent value="Settings" className="space-y-6">
                    <div className="bg-muted/30 p-6 rounded-lg space-y-4">
                      <h4 className="font-medium mb-3">ยืนยันอีเมล</h4>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3 bg-background px-4 py-3 rounded-md shadow-sm">
                          <Mail className="text-primary h-5 w-5" />
                          <span className="font-medium">{user.email}</span>
                        </div>
                        <Button
                          variant={isEmailVerified ? "ghost" : "default"}
                          size="sm"
                          className="min-w-[120px]"
                          onClick={handleEmailVerification}
                          disabled={isEmailVerified}
                        >
                          {isEmailVerified ? "✓ ยืนยันแล้ว" : "ยืนยันอีเมล"}
                        </Button>
                      </div>
                    </div>

                    <div className="bg-muted/30 p-6 rounded-lg space-y-4">
                      <h4 className="font-medium mb-3">ยืนยันเบอร์โทรศัพท์</h4>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center bg-background rounded-md shadow-sm overflow-hidden">
                          <div className="px-4 py-3 bg-primary/10">
                            <PhoneCall className="text-primary h-5 w-5" />
                          </div>
                          <Input
                            type="tel"
                            placeholder="กรอกเบอร์โทรศัพท์"
                            value={phoneNumber}
                            onChange={(e) => setPhoneNumber(e.target.value)}
                            className="border-0 focus-visible:ring-0 bg-transparent w-[200px]"
                          />
                        </div>
                        <Button
                          variant={isPhoneVerified ? "ghost" : "default"}
                          size="sm"
                          className="min-w-[120px]"
                          onClick={handlePhoneVerification}
                          disabled={isPhoneVerified}
                        >
                          {isPhoneVerified ? "✓ ยืนยันแล้ว" : "ยืนยันเบอร์โทร"}
                        </Button>
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

                  <TabsContent value="The" className="pt-4">
                    <ThemeSelector />
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
