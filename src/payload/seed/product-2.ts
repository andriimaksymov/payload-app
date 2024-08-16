import type { Product } from '../payload-types'

export const product2: Partial<Product> = {
  title: 'E-Book',
  stripeProductID: '',
  slug: 'ebook',
  _status: 'published',
  meta: {
    title: 'E-Book',
    description: 'Make a one-time purchase for this digital asset.',
    image: '{{PRODUCT_IMAGE}}',
  },
  enablePaywall: true,
  paywall: [
    {
      blockType: 'content',
      columns: [
        {
          size: 'twoThirds',
          richText: [
            {
              children: [
                {
                  text: 'This is paywall content!',
                  bold: true,
                },
                {
                  text: ' It is only available to admins and users who have purchased this product. This content can be anything from additional video, text, and content, to download links and more. These are simply layout building blocks configured in the CMS.',
                },
              ],
            },
          ],
          link: {
            reference: null,
            url: '',
            label: '',
          },
        },
      ],
    },
  ],
  relatedProducts: [], // this is populated by the seed script
  priceJSON:
    '{"object":"list","data":[{"id":"price_1NWAmCIsIsxtNwz9c30YMMo0","object":"price","active":true,"billing_scheme":"per_unit","created":1689913032,"currency":"usd","custom_unit_amount":null,"livemode":false,"lookup_key":null,"metadata":{},"nickname":null,"product":"prod_OImKj4D1xKTMzM","recurring":null,"tax_behavior":"unspecified","tiers_mode":null,"transform_quantity":null,"type":"one_time","unit_amount":2999,"unit_amount_decimal":"2999"}],"has_more":false,"url":"/v1/prices"}',
}
