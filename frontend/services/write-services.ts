import { sapphireTestnet, sepolia } from 'viem/chains'
import payrollAbi from '@/utils/payrollAbi'
import { writeContract } from '@wagmi/core'
import { config } from '@/utils/config'
import { Address } from '@/state/types'

export async function createOrg(name: string) {
  const result = await writeContract(config, {
    chainId: sepolia.id,
    abi: payrollAbi,
    functionName: 'addCompany',
    args: [name],
    address: process.env.NEXT_PUBLIC_PAYROLL_CONTRACT_ADDRESS as  `0x${string}`,
  })
  console.log('add new org', result)
  return result
}

export async function addNewEmployee(address: `0x${string}`, salary: number, activity: string, empName: string) {
  const result = await writeContract(config, {
    chainId: sepolia.id,
    abi: payrollAbi,
    functionName: 'addEmployee',
    args: [address, BigInt(salary), activity, empName],
    address: process.env.NEXT_PUBLIC_PAYROLL_CONTRACT_ADDRESS as  `0x${string}`,
  })
  console.log('add new Employee transaction', result)
  return result
}

// export async function verifyEmployee(address: Address) {
//   const result = await writeContract(config, {
//     chainId: sepolia.id,
//     abi: payrollAbi,
//     functionName: 'verifyEmployee',
//     args: [address],
//     address: process.env.NEXT_PUBLIC_PAYROLL_CONTRACT_ADDRESS as  `0x${string}`,
//   })
//   console.log('verifying employee', result)
//   return result
// }

export async function paySalary(address: `0x${string}`, orgAddress: `0x${string}`) {
  const result = await writeContract(config, {
    chainId: sepolia.id,
    abi: payrollAbi,
    functionName: 'payout',
    args: [address, orgAddress],
    address: process.env.NEXT_PUBLIC_PAYROLL_CONTRACT_ADDRESS as  `0x${string}`,
  })
  console.log('payout to employee', result)
  return result
}

export async function fundCompany(amountInEth: number) {
  try {
    const amountInWei = BigInt(Number(amountInEth) * 10 ** 18); 

    const result = await writeContract(config, {
      chainId: sepolia.id,
      abi: payrollAbi,
      functionName: 'fundCompany',
      args: [],
      address: process.env.NEXT_PUBLIC_PAYROLL_CONTRACT_ADDRESS as  `0x${string}`,
      value: amountInWei,
    })

    console.log('Transaction sent:', result);
  } catch (error) {
    console.error("Error funding company:", error);
  }
}
