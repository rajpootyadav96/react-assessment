import React, { useEffect, useState } from 'react';
import { baseUrl } from './utilities';
import axios from 'axios'
import Navigation from './component/Navigation';
import Card from './component/Card';

const UserList = () => {
  // React States

    const [data, setData] = useState([]);
    const [headers, setheaders] = useState()
    const [isFilter, setIsFilter] = useState(false)
    const [filteredData, setFilteredResults] = useState()
    const [showList, setShowList] = useState(true)


    // get Data from api

    useEffect(() => {
        const fetchData = async () => {
            try {
                const result = await axios(baseUrl);  // axios is used for api call
                setData(result.data);
                setIsFilter(false)
                setFilteredResults(result.data)

                // setting headers from list
                let header = Object.keys(result.data[0]);
                setheaders(header)
            } catch (error) {
            }
        };

        fetchData(); // function called fetching api data
    }, [baseUrl]);


    //filter data from search box

    const handleFilterChange = (searchValue) => {
        if (searchValue) {
            const filteredData = data?.filter((item) => {
                return Object.values(item).join('').toLowerCase().includes(searchValue.toLowerCase())
            })
            // when seach text is matched
            setFilteredResults(filteredData)
            setIsFilter(true)
        }
        else {
            //when search text didn't match
            setFilteredResults(data)
            setIsFilter(false)
        }
    }


    //Toggle between list & card list

    const toggleData = (type) => {
        if (type === 'list') {
            setShowList(true)
        }
        else {
            setShowList(false)
        }
    }

    return (
        <div>
            <div className='pt-5 pl-2 font-xl bg-teal-700 color-white flex justify-between'>
                <div className='font-bold text-xl text-white pb-5'>
                
                <Navigation clickList={() => toggleData('list')}   // navigation component
                    clickCard={() => toggleData('cardList')} />
                </div>
                    <div>
                            <input type='search' onChange={(e) => handleFilterChange(e.target.value)} className='border-[#243c5a] border textarea rounded pr-2 pt-1 mr-5 pb-1 pl-2' placeholder='Search...' />
                        </div>
            </div>

            {showList ?
                <div>
                    <div className='h-20 flex justify-between pr-10 pt-8 pl-2 pr-2'>
                        <div className='text-2xl font-bold'>User List</div>
                        {isFilter && <div className='p-2 bg-sky-500/50 border rounded'>You are viewing filtered results!</div>}
                        
                    </div>
                    <div >
                        <table className='w-screen table-fixed'>
                            <thead>
                                <tr className='bg-slate-200'>
                                    {headers?.map((item, idx) => {
                                        return (
                                            <th key={idx} className='pt-2 pb-2 text-left'>{item}</th>
                                        )
                                    })}
                                </tr>
                            </thead>
                            <tbody>                    {
                                filteredData?.map((item, idx) => {
                                    return (
                                        <tr key={idx} className="pt-1 pb-1">
                                            <td className='text-left'>{item?.name}</td>
                                            <td className='text-left'>{item?.age}</td>
                                            <td className='text-left'>{item?.occupation}</td>
                                        </tr>
                                    )
                                })
                            }
                            </tbody>

                        </table>
                    </div>
                </div>
                : <div className='pl-5'> 
                    <div className='text-2xl pt-8 font-bold mb-5'>Card List</div>
                    <div className="grid grid-cols-3">
                    {
                        filteredData?.map((item, idx) => {

                            return (<div 
                            // className='h-3/5 w-2/6 p-5 flex-row'
                            >
                                <Card data={item} /> 
                            </div>
                            )
                        })
                    }
                    </div>
                </div>}

        </div>
    )
}

export default UserList;