
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "@/context/AuthContext";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowUpRight, BarChart3, Users, FileText, Activity } from "lucide-react";

const stats = [
  {
    title: "Total Users",
    value: "1,234",
    change: "+12.3%",
    icon: Users,
    color: "bg-blue-100 text-blue-600",
  },
  {
    title: "Revenue",
    value: "$12,345",
    change: "+23.1%",
    icon: BarChart3,
    color: "bg-green-100 text-green-600",
  },
  {
    title: "Active Projects",
    value: "12",
    change: "+2",
    icon: FileText,
    color: "bg-purple-100 text-purple-600",
  },
  {
    title: "Conversion Rate",
    value: "3.2%",
    change: "+0.4%",
    icon: Activity,
    color: "bg-orange-100 text-orange-600",
  },
];

const recentActivity = [
  {
    id: 1,
    title: "Project X launched",
    time: "2 hours ago",
    description: "The team successfully deployed Project X to production.",
  },
  {
    id: 2,
    title: "New team member",
    time: "Yesterday",
    description: "John Doe joined the development team.",
  },
  {
    id: 3,
    title: "Client meeting",
    time: "2 days ago",
    description: "Meeting with client to discuss project requirements.",
  },
  {
    id: 4,
    title: "System update",
    time: "3 days ago",
    description: "Updated all servers to the latest software version.",
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
          <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
          <div className="mt-3 sm:mt-0">
            <p className="text-sm text-gray-500">
              Welcome back, <span className="font-medium text-gray-900">{user.name}</span>
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
              <CardTitle>Weekly Overview</CardTitle>
              <CardDescription>A summary of your weekly performance</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-80 flex items-center justify-center border border-dashed border-gray-200 rounded-lg">
                <p className="text-gray-500">Chart placeholder</p>
              </div>
            </CardContent>
          </Card>
          
          <Card className="lg:col-span-2">
            <CardHeader>
              <CardTitle>Recent Activity</CardTitle>
              <CardDescription>Your recent actions and updates</CardDescription>
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
              <CardTitle>Tasks</CardTitle>
              <CardDescription>Your upcoming tasks</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-64 flex items-center justify-center border border-dashed border-gray-200 rounded-lg">
                <p className="text-gray-500">Task list placeholder</p>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle>Messages</CardTitle>
              <CardDescription>Recent messages and notifications</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-64 flex items-center justify-center border border-dashed border-gray-200 rounded-lg">
                <p className="text-gray-500">Messages placeholder</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
