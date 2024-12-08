import { useAccount, useReadContract, useBalance } from 'wagmi'
import { sapphireTestnet, sepolia } from 'viem/chains'
import payrollAbi from '@/utils/payrollAbi'
import { readContracts, readContract } from '@wagmi/core'
import { config } from '@/utils/config'
import { Address, Employee, Organization } from '@/state/types'

export async function fetchEmployees(employeeAddresses: readonly `0x${string}`[]) {
  const results = await readContracts(config, {
    contracts: employeeAddresses.map((employeeAddress) => ({
      chainId: sepolia.id,
      abi: payrollAbi,
      functionName: 'getEmployee',
      args: [employeeAddress],
      address: process.env.NEXT_PUBLIC_PAYROLL_CONTRACT_ADDRESS as `0x${string}`,
    })),
  })
  console.log('fetchEmployees', results)

  return results
    .filter((result) => result.status === 'success')
    .map((result) => {
      const r = result.result as any

      return {
        address: r.employeeAddress,
        employeeName: r.employeeName,
        orgAddress: r.companyAddress,
        salary: Number(r.dailyWageWei),
        //verified: Boolean(r.worldidverified),
        activity: r.activity,
        daysWorked: Number(r.lastPayed),
      } as Employee
    })
}

export async function fetchEmployee(address: `0x${string}`) {
  console.log('fetch', address)

  const result = await readContract(config, {
    chainId: sepolia.id,
    abi: payrollAbi,
    functionName: 'getEmployee',
    args: [address],
    address: process.env.NEXT_PUBLIC_PAYROLL_CONTRACT_ADDRESS as `0x${string}`,
  })

  console.log('fetchEmployee', result)
  return {
    address: result.employeeAddress,
    employeeName: result.employeeName,
    orgAddress: result.companyAddress,
    salary: Number(result.dailyWageWei),
    // verified: Boolean(result.worldidverified),
    activity: result.activity,
    daysWorked: Number(result.lastPayed),
  } as Employee
}

export async function fetchOrganization(address: `0x${string}`) {
  const result = await readContract(config, {
    chainId: sepolia.id,
    abi: payrollAbi,
    functionName: 'getCompany',
    args: [address],
    address: process.env.NEXT_PUBLIC_PAYROLL_CONTRACT_ADDRESS as `0x${string}`,
  })

  return {
    orgAddress: result.companyAddress,
    orgName: result.companyName,
    orgTreasury: Number(result.treasury),
  } as Organization
}