const slugify = require('slugify');
const { VillaModel } = require('../model/villa.model');

const generateUniqueSlug = async (req,res,next) => {
  const title=req.body.name
    let slug = slugify(title, {
    replacement: '-',
    lower: true
  });

  let isUnique = false;
  let suffix = 1;

  while (!isUnique) {
    const existingSlug = await VillaModel.findOne({ where: { slug } });

    if (!existingSlug) {
      isUnique = true;
    } else {
      slug = `${slug}-${suffix}`;
      suffix++;
    }
  }
  req.body.slug=slug
  next()
};

module.exports = { generateUniqueSlug };