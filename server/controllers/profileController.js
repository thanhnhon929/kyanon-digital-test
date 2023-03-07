import Profile from "../models/Profile.js";


export const profileController = {
    updateProfile : async (req, res) => {
        try {
            const idProfile = req.params.idProfile 
            const {name, birth, email, phone} = req.body
          const profile = await Profile.findByIdAndUpdate(
            idProfile,
            {
                $set: {
                    name: name.current,
                    birth: birth.current,
                    email: email.current,
                    phone: phone.current
                  },
          },
          { new: true }
          );
          if (!profile) {
            return res.status(404).json({ message: "No profile found" });
          }
          return res.status(200).json({data:profile,status: 200, message: 'Update Susseccful'});
        } catch (error) {
          return res.status(500).json(error);
        }
      },
}