"use client";

import { Plus } from "lucide-react";
import { useNewAccount } from "@/features/accounts/hooks/use-new-account";
import { useGetAccounts } from "@/features/accounts/api/use-get-accounts";

import { Button } from "@/components/ui/button";
import { DataTable } from "@/components/data-table";
import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { columns } from "./columns";

const AccountsPage = () => {

    const newAccount = useNewAccount();
    const accountsQuery = useGetAccounts();
    const accounts = accountsQuery.data || [];

    return (
        <div className="max-w-screen-2xl mx-auto w-full pb-10 -mt-24">
            <Card className="border-none drop-shadow-sm">
                <CardHeader className="gap-y-2 lg:flex-row lg:items-center lg:justify-between">
                    <CardTitle className="text-xl line-clamp-1">

                        Accounts Page
                    </CardTitle>
                    <Button onClick={newAccount.onOpen} size="sm">
                        <Plus className="size-4 mr-2"/>
                        Add new
                    </Button>
                </CardHeader>
                <CardContent>
                    <DataTable
                        filterKey="email"
                        columns={columns}
                        data={accounts}
                        onDelete={() => { }}
                        disabled={false}
                    />
                </CardContent>
            </Card>
        </div>
    );
};

export default AccountsPage;

// async function getData(): Promise<Payment[]>{
//     return [
//       {
//         id: "728ed52f",
//         amount: 100,
//         status: "pending",
//         email: "m@example.com",
//       },
      
//     ];
// }
