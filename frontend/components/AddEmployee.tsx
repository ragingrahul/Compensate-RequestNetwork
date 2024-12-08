import { Button } from "@/components/ui/button"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input"
// import { addEmployeeMove } from "@/services/write-services";
import { Roboto_Mono } from '@next/font/google'
const roboto = Roboto_Mono({
  subsets: ['latin'],
  weight: ['300', '400', '500', '700',]
})

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { addNewEmployee } from "@/services/write-services";

const FormSchema = z.object({
    employeeName: z.string().min(1, {
        message: "Employee Name is required.",
    }),
    walletAddress: z.string().min(1, {
      message: "Wallet Address is required.",
    }),
    jobTitle: z.string().min(2, {
      message: "Job Title must be at least 2 characters.",
    }),
    dailySalary: z.coerce.number({
        invalid_type_error: "Amount must be a number.",
    })
});

export function AddEmployee() {
    // const { account, signAndSubmitTransaction } = useWallet()
    const form = useForm<z.infer<typeof FormSchema>>({
        resolver: zodResolver(FormSchema),
        defaultValues: {
          employeeName: "",
          walletAddress: "",
          jobTitle: "",
        },
      });
    
      // Handle form submission
      async function onSubmit(data: z.infer<typeof FormSchema>) {
        try {
            const response= await addNewEmployee(data.walletAddress as `0x${string}`,data.dailySalary,data.jobTitle,data.employeeName);
            console.log(response);
            window.location.reload();
          } catch (error) {
            console.error(error)
          }
        }

    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button variant="purple" className={roboto.className}>Add Employee</Button>
            </DialogTrigger>
            <DialogContent className="w-[900px] ">
                <DialogHeader>
                    <DialogTitle className="text-purple">New Employee</DialogTitle>
                    <DialogDescription>
                        After adding an employee, they must perform a Zero Knowledge Proof Verification before receiving payments.
                    </DialogDescription>
                </DialogHeader>
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                        {/* EmployeeName Input */}
                        <FormField
                            control={form.control}
                            name="employeeName"
                            render={({ field }) => (
                                <FormItem>
                                    <FormControl>
                                        <Input placeholder="Employee Name" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        {/* Wallet Address Input */}
                        <FormField
                            control={form.control}
                            name="walletAddress"
                            render={({ field }) => (
                                <FormItem>
                                    <FormControl>
                                        <Input placeholder="Wallet Address" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        {/* Job Title Input */}
                        <FormField
                            control={form.control}
                            name="jobTitle"
                            render={({ field }) => (
                                <FormItem>
                                    <FormControl>
                                        <Input placeholder="Job Title" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        {/* Daily Salary Input */}
                        <FormField
                            control={form.control}
                            name="dailySalary"
                            render={({ field }) => (
                                <FormItem>
                                    <FormControl>
                                        <Input placeholder="Daily Dalary" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                    </form>
                </Form>
                <DialogFooter>
                    <Button type="submit" variant="purple" onClick={form.handleSubmit(onSubmit)}>Add</Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    )
}
