export const updateCompany = async (req, res) => {
    try {
      const updatedCompany = await Company.findByIdAndUpdate(req.params.id, req.body, { new: true });
      if (!updatedCompany) return res.status(404).json({ error: "Company not found" });
      res.json(updatedCompany);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Failed to update company" });
    }
  };

export const getCompanies = (req, res) => {
    
};

export const addCompany = (req, res) => {
   
};

export const deleteCompany = (req, res) => {
  
};

  