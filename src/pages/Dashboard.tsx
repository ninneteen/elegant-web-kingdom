
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "@/context/AuthContext";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowUpRight, BarChart3, Users, FileText, Activity } from "lucide-react";

const stats = [
  {
    title: "ผู้ใช้ทั้งหมด",
    value: "1,234",
    change: "+12.3%",
    icon: Users,
    color: "bg-blue-100 text-blue-600",
  },
  {
    title: "รายได้",
    value: "฿12,345",
    change: "+23.1%",
    icon: BarChart3,
    color: "bg-green-100 text-green-600",
  },
  {
    title: "โปรเจ็กต์ที่กำลังดำเนินการ",
    value: "12",
    change: "+2",
    icon: FileText,
    color: "bg-purple-100 text-purple-600",
  },
  {
    title: "อัตราการเปลี่ยนแปลง",
    value: "3.2%",
    change: "+0.4%",
    icon: Activity,
    color: "bg-orange-100 text-orange-600",
  },
];

const recentActivity = [
  {
    id: 1,
    title: "เปิดตัวโปรเจ็กต์ X",
    time: "2 ชั่วโมงที่แล้ว",
    description: "ทีมประสบความสำเร็จในการนำโปรเจ็กต์ X ออกสู่การผลิต",
  },
  {
    id: 2,
    title: "สมาชิกทีมใหม่",
    time: "เมื่อวาน",
    description: "คุณกมล แสนดี เข้าร่วมทีมพัฒนา",
  },
  {
    id: 3,
    title: "ประชุมกับลูกค้า",
    time: "2 วันที่แล้ว",
    description: "ประชุมกับลูกค้าเพื่อหารือเกี่ยวกับความต้องการของโปรเจ็กต์",
  },
  {
    id: 4,
    title: "อัปเดตระบบ",
    time: "3 วันที่แล้ว",
    description: "อัปเดตเซิร์ฟเวอร์ทั้งหมดเป็นซอฟต์แวร์เวอร์ชันล่าสุด",
  },
];

const Dashboard = () => {
  const { isAuthenticated, user } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!isAuthenticated) {
      navigate("/login");
    }
  }, [isAuthenticated, navigate]);

  if (!isAuthenticated || !user) {
    return null;
  }

  return (
    <div className="min-h-screen pt-20 pb-10 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="pb-5 border-b border-gray-200 sm:flex sm:items-center sm:justify-between">
          <h1 className="text-3xl font-bold text-gray-900">แดชบอร์ด</h1>
          <div className="mt-3 sm:mt-0">
            <p className="text-sm text-gray-500">
              ยินดีต้อนรับกลับ, <span className="font-medium text-gray-900">{user.name}</span>
            </p>
          </div>
        </div>
        
        <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat) => (
            <Card key={stat.title} className="overflow-hidden">
              <CardHeader className="pb-2">
                <div className="flex items-center justify-between">
                  <CardTitle className="text-sm font-medium text-gray-500">{stat.title}</CardTitle>
                  <div className={`p-2 rounded-full ${stat.color}`}>
                    <stat.icon className="h-5 w-5" />
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex items-baseline">
                  <p className="text-2xl font-semibold text-gray-900">{stat.value}</p>
                  <p className="ml-2 flex items-baseline text-sm font-semibold text-green-600">
                    {stat.change}
                    <ArrowUpRight className="ml-0.5 h-4 w-4" />
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="mt-6 grid grid-cols-1 gap-6 lg:grid-cols-6">
          <Card className="lg:col-span-4">
            <CardHeader>
              <CardTitle>ภาพรวมรายสัปดาห์</CardTitle>
              <CardDescription>สรุปผลการดำเนินงานประจำสัปดาห์ของคุณ</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-80 flex items-center justify-center border border-dashed border-gray-200 rounded-lg">
                <p className="text-gray-500">ตำแหน่งวางแผนภูมิ</p>
              </div>
            </CardContent>
          </Card>
          
          <Card className="lg:col-span-2">
            <CardHeader>
              <CardTitle>กิจกรรมล่าสุด</CardTitle>
              <CardDescription>การดำเนินการและการอัปเดตล่าสุดของคุณ</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {recentActivity.map((activity) => (
                  <div key={activity.id} className="border-b pb-4 border-gray-100 last:border-0 last:pb-0">
                    <div className="flex justify-between">
                      <h4 className="text-sm font-medium text-gray-900">{activity.title}</h4>
                      <span className="text-xs text-gray-500">{activity.time}</span>
                    </div>
                    <p className="mt-1 text-xs text-gray-500">{activity.description}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
        
        <div className="mt-6 grid grid-cols-1 gap-6 lg:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle>งาน</CardTitle>
              <CardDescription>งานที่กำลังจะมาถึงของคุณ</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-64 flex items-center justify-center border border-dashed border-gray-200 rounded-lg">
                <p className="text-gray-500">ตำแหน่งวางรายการงาน</p>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle>ข้อความ</CardTitle>
              <CardDescription>ข้อความและการแจ้งเตือนล่าสุด</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-64 flex items-center justify-center border border-dashed border-gray-200 rounded-lg">
                <p className="text-gray-500">ตำแหน่งวางข้อความ</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
