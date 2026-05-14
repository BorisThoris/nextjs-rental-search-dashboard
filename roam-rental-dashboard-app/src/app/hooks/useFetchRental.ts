import { useState, useEffect } from 'react'
import _ from 'lodash'

import { Rental } from '../sharedTypes/rental'
import { mockRentals } from '../mockRentals'

interface Data {
  rentals: Rental[] | null;
  error: any;
  loading: boolean;
  refetchRentals: (type?: string) => Promise<void>;
}

export const useFetchRentals = (type?:string): Data => {
    const [rentals, setRentals] = useState<Rental[] | null>(null)
    const [error, setError] = useState<any>(null)
    const [loading, setLoading] = useState(false)

    const refetch = async (type?:string) => {
        setLoading(true)
        try {
          const searchValue = _.isUndefined(type) ? '' : type.toLowerCase()
          const nextRentals = searchValue
            ? mockRentals.filter((item) => {
                const searchableText = [
                  item.name,
                  item.description,
                  ...item.categories,
                ].join(' ').toLowerCase()

                return searchableText.includes(searchValue)
              })
            : mockRentals

          setRentals(nextRentals)
          setError(null)
          setLoading(false)
        } catch (error) {
          setError(error)
          setLoading(false)
        }
    }

    useEffect(() => {
      refetch(type)
    }, [type])
  
    return { rentals, error, loading, refetchRentals:refetch }
  }
