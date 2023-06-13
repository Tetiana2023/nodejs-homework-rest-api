const {Contact} = require("../../models/contact")
const { HttpError, ctrlWrapper } = require("../../helpers");

const updateContactById = async (req, res) => {
  
    const { contactId } = req.params;
    const result = await Contact.findByIdAndUpdate(contactId, req.body, {new: true});
    if (!result) {
      throw HttpError(404, "Not found");
    }
    res.json(result);
  };
  module.exports = {
    updateContactById: ctrlWrapper(updateContactById),
  }