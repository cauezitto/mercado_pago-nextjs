import mercadopago from 'mercadopago'
import 'dotenv'

mercadopago.configure({
  access_token: process.env.MP_TOKEN
});

export default async(req, res) => {

  console.log(req.body)

  let preference = {
    items: req.body.items.map(item => {
      return {
        title: item.title,
        unit_price: item.unit_price,
        quantity: 1,
      }
    }),
  };

  mercadopago.preferences.create(preference)
  .then(function(response){
    return res.json(response.body)
  }).catch(function(error){
    console.log(error);
  });
}
