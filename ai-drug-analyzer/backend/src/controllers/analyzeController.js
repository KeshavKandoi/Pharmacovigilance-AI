import {analyzeDrugData} from "../services/analysisService";

export const analyzeDrug=async (req,res,next)=>{
  try{
    const {drugName,symptoms}=req.body;

    const result=await analyzeDrugData(drugName,symptoms);

    res.json({
      success:true,
      data:result,
    });
  }catch(error){
    next(error);
  }
}