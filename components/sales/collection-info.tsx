"use client"

import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Input } from "@/components/ui/input"

export function CollectionInfo() {
  const summaryData = {
    delivered: "0.00",
    collected: "0.00",
    writeOff: "0.00",
    uncollected: "0.00",
    advancePayment: "0.00",
  }

  const collectionRecords = [
    {
      date: "2025-01-26",
      amount: "0.00",
      account: "现金",
      notes: "",
      number: "",
    },
  ]

  return (
    <div className="space-y-4">
      <div className="flex items-center gap-8 text-sm">
        <h3 className="font-medium">收款信息</h3>
        <div className="flex items-center gap-4">
          <span>已送货: {summaryData.delivered}</span>
          <span>已收款: {summaryData.collected}</span>
          <span>已冲销: {summaryData.writeOff}</span>
          <span>未收款: {summaryData.uncollected}</span>
        </div>
        <div className="flex items-center gap-2 ml-auto">
          <input type="checkbox" id="useAdvancePayment" className="rounded border-gray-300" />
          <label htmlFor="useAdvancePayment">使用预收款冲销！</label>
          <span>{summaryData.advancePayment}</span>
        </div>
      </div>

      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>操作</TableHead>
            <TableHead>收款日期</TableHead>
            <TableHead>收款金额</TableHead>
            <TableHead>收款账户</TableHead>
            <TableHead>备注</TableHead>
            <TableHead>收款单号</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {collectionRecords.map((record, index) => (
            <TableRow key={index}>
              <TableCell>
                <button className="text-red-500 hover:text-red-700">删除</button>
              </TableCell>
              <TableCell>{record.date}</TableCell>
              <TableCell>{record.amount}</TableCell>
              <TableCell>{record.account}</TableCell>
              <TableCell>
                <Input value={record.notes} onChange={() => {}} className="min-w-[200px]" />
              </TableCell>
              <TableCell>{record.number}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}

