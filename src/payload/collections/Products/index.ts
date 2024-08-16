import type { CollectionConfig } from 'payload/types'

import { admins } from '../../access/admins'
import { Archive } from '../../blocks/ArchiveBlock'
import { CallToAction } from '../../blocks/CallToAction'
import { Content } from '../../blocks/Content'
import { MediaBlock } from '../../blocks/MediaBlock'
import { slugField } from '../../fields/slug'
import { populateArchiveBlock } from '../../hooks/populateArchiveBlock'
import { checkUserPurchases } from './access/checkUserPurchases'
import { beforeProductChange } from './hooks/beforeChange'
import { deleteProductFromCarts } from './hooks/deleteProductFromCarts'
import { revalidateProduct } from './hooks/revalidateProduct'
import { ProductSelect } from './ui/ProductSelect'

const Products: CollectionConfig = {
  slug: 'products',
  admin: {
    useAsTitle: 'title',
    defaultColumns: ['title', 'stripeProductID', '_status'],
    preview: doc => {
      return `${process.env.PAYLOAD_PUBLIC_SERVER_URL}/next/preview?url=${encodeURIComponent(
        `${process.env.PAYLOAD_PUBLIC_SERVER_URL}/products/${doc.slug}`,
      )}&secret=${process.env.PAYLOAD_PUBLIC_DRAFT_SECRET}`
    },
  },
  hooks: {
    beforeChange: [beforeProductChange],
    afterChange: [revalidateProduct],
    afterRead: [populateArchiveBlock],
    afterDelete: [deleteProductFromCarts],
  },
  versions: {
    drafts: true,
  },
  access: {
    read: () => true,
    create: admins,
    update: admins,
    delete: admins,
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
    },
    {
      name: 'description',
      type: 'text',
    },
    {
      name: 'sizes',
      type: 'select',
      hasMany: true,
      options: [
        { label: 'XL', value: 'XL' },
        { label: 'L', value: 'L' },
        { label: 'M', value: 'M' },
        { label: 'S', value: 'S' },
        { label: 'XS', value: 'XS' },
      ],
      required: true,
    },
    {
      name: 'features',
      type: 'select',
      hasMany: true,
      options: [
        { label: 'Ideal for large pets', value: 'IdealForLargePets' },
        { label: 'Large battery capacity', value: 'LargeBatteryCapacity' },
        { label: 'GPS', value: 'GPS' },
      ],
    },
    {
      name: 'magic',
      type: 'select',
      hasMany: true,
      options: [
        { label: 'Person-to-pet dialog', value: 'PersonToPetDialog' },
        { label: 'Pet-to-pet dialog', value: 'PetToPetDialog' },
      ],
    },
    {
      name: 'wellbeing',
      type: 'select',
      hasMany: true,
      options: [
        { label: 'Distress detection', value: 'distressDetection' },
        { label: 'Alerts', value: 'alerts' },
        { label: 'Reports', value: 'reports' },
      ],
    },
    {
      name: 'outOfBoxExperience',
      type: 'select',
      hasMany: true,
      options: [{ label: 'Box open/close game', value: 'BoxOpenCloseGame' }],
    },
    {
      name: 'goTime',
      type: 'select',
      hasMany: true,
      options: [{ label: 'Alert - pet waiting at door ', value: 'AlertPetWaitingAtDoor' }],
    },
    {
      name: 'batteryLife',
      type: 'select',
      hasMany: true,
      options: [{ label: '21 days', value: '21 days' }],
    },
    {
      name: 'charger',
      type: 'select',
      hasMany: true,
      options: [{ label: 'USB-C', value: 'USB-C' }],
    },
    {
      name: 'virtualLeash',
      type: 'select',
      hasMany: true,
      options: [{ label: 'Pet-to-owner - "I am sick."', value: 'value1' }],
    },
    {
      name: 'gallery',
      label: 'Image Gallery',
      type: 'array',
      fields: [
        {
          name: 'image',
          label: 'Image',
          type: 'upload',
          relationTo: 'media',
          required: true,
        },
      ],
      required: true,
    },
    {
      name: 'publishedOn',
      type: 'date',
      admin: {
        position: 'sidebar',
        date: {
          pickerAppearance: 'dayAndTime',
        },
      },
      hooks: {
        beforeChange: [
          ({ siblingData, value }) => {
            if (siblingData._status === 'published' && !value) {
              return new Date()
            }
            return value
          },
        ],
      },
    },
    {
      type: 'tabs',
      tabs: [
        {
          label: 'Product Details',
          fields: [
            {
              name: 'stripeProductID',
              label: 'Stripe Product',
              type: 'text',
              admin: {
                components: {
                  Field: ProductSelect,
                },
              },
            },
            {
              name: 'priceJSON',
              label: 'Price JSON',
              type: 'textarea',
              admin: {
                readOnly: true,
                hidden: true,
                rows: 10,
              },
            },
            {
              name: 'enablePaywall',
              label: 'Enable Paywall',
              type: 'checkbox',
            },
            {
              name: 'paywall',
              label: 'Paywall',
              type: 'blocks',
              access: {
                read: checkUserPurchases,
              },
              blocks: [CallToAction, Content, MediaBlock, Archive],
            },
          ],
        },
      ],
    },
    {
      name: 'categories',
      type: 'relationship',
      relationTo: 'categories',
      hasMany: true,
      admin: {
        position: 'sidebar',
      },
    },
    {
      name: 'relatedProducts',
      type: 'relationship',
      relationTo: 'products',
      hasMany: true,
      filterOptions: ({ id }) => {
        return {
          id: {
            not_in: [id],
          },
        }
      },
    },
    slugField(),
    {
      name: 'skipSync',
      label: 'Skip Sync',
      type: 'checkbox',
      admin: {
        position: 'sidebar',
        readOnly: true,
        hidden: true,
      },
    },
  ],
}

export default Products
