import mercadopago from 'mercadopago'

mercadopago.configure({
  access_token: 'TEST-1887197855834229-032416-4a0a0bfacb4fb0dd229fdee6493d49d5-269883664'
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
