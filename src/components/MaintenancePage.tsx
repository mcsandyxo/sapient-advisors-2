import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { AlertTriangle, Clock } from "lucide-react";

const MaintenancePage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center p-4">
      <Card className="max-w-md w-full mx-auto shadow-lg">
        <CardHeader className="text-center pb-4">
          <div className="flex justify-center mb-4">
            <div className="p-3 bg-amber-100 rounded-full">
              <AlertTriangle className="h-8 w-8 text-amber-600" />
            </div>
          </div>
          <CardTitle className="text-2xl font-bold text-gray-800">
            Site Temporarily Unavailable
          </CardTitle>
          <Badge
            variant="outline"
            className="mx-auto mt-2 text-amber-700 border-amber-200"
          >
            <Clock className="h-3 w-3 mr-1" />
            Under Maintenance
          </Badge>
        </CardHeader>
        <CardContent className="text-center space-y-4">
          <p className="text-gray-600 leading-relaxed">
            Our website is temporarily out of service due to maintenance tasks.
          </p>
          <p className="text-gray-600 leading-relaxed">
            We are working to restore service as soon as possible.
          </p>
          <div className="pt-4 border-t border-gray-100">
            <p className="text-sm text-gray-500">
              For urgent inquiries, please contact us directly.
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default MaintenancePage;
