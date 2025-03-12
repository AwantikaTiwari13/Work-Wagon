import React from "react";
import Navbar from "../shared/Navbar";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Button } from "../ui/button";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import { COMPANY_API_END_POINT } from "../../utils/constant";
import { useDispatch } from "react-redux";
import { setSingleCompany } from "../../redux/companySlice";
import { toast } from "sonner";

const CompanyCreate = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [companyName, setCompanyName] = useState();

  const registerNewCompany = async () => {
    try {
      const res = await axios.post(
        `${COMPANY_API_END_POINT}/register`,
        { companyName },
        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        }
      );
      if (res?.data.success) {
        dispatch(setSingleCompany(res.data.company));
        toast.success(res?.data.message);
        const companyId = res?.data?.company?._id;
        navigate(`/admin/company/create/${companyId}`); // Redirect to the newly created company;
      }
    } catch (error) {}
  };
  return (
    <div>
      <Navbar />
      <div className="mas-w-4xl mx-auto">
        <div className="my-10">
          <h1 className="font-bold text-2xl">Your Company's Name</h1>
          <p className="text-gray-500">
            Please give your company a name, you can change this later
          </p>
        </div>
        <Label>Company Name</Label>
        <Input
          type="text"
          className="my-2"
          placeholder="JobHunt, Microsoft etc"
          onChange={(e) => setCompanyName(e.target.value)}
        />
        <div className="flex items-center justify-between">
          <Button
            variant="outline"
            onClick={() => navigate("/admin/companies")}
          >
            Cancel
          </Button>
          <Button className="bg-black text-white" onClick={registerNewCompany}>
            Continue
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CompanyCreate;
