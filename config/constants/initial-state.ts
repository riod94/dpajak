const INITIAL_STATE = {
    PPH_21_STATE: {
        personal: [
            {
                type: "text",
                name: "name",
                label: "Nama Karyawan",
                value: "",
                classNames: {
                    inputWrapper: "bg-transparent p-[0.1rem]",
                },
            },
            {
                type: "button-group",
                color: "success",
                name: "npwp",
                label: "NPWP",
                value: "Ya",
                itemClassname: "rounded-full py-0",
                items: [
                    {
                        label: "Ya",
                        value: "Ya",
                        description: "",
                    },
                    {
                        label: "Tidak",
                        value: "Tidak",
                        description: "",
                    },
                ],
            },
            {
                type: "button-group",
                color: "success",
                name: "taxMethod",
                label: "Tunjangan Pajak",
                value: "GROSS",
                itemClassname: "rounded-full py-0",
                items: [
                    {
                        label: "Gross",
                        value: "GROSS",
                        description: "",
                    },
                    {
                        label: "Gross Up",
                        value: "GROSS UP",
                        description: "",
                    },
                ],
            },
            {
                type: "button-group",
                color: "success",
                name: "ptkpStatus",
                label: "Status PTKP",
                value: "TK/0",
                itemClassname: "rounded-full py-0",
                items: [
                    {
                        label: "TK/0",
                        value: "TK/0",
                        description: "",
                    },
                    {
                        label: "TK/1",
                        value: "TK/1",
                        description: "",
                    },
                    {
                        label: "TK/2",
                        value: "TK/2",
                        description: "",
                    },
                    {
                        label: "TK/3",
                        value: "TK/3",
                        description: "",
                    },
                    {
                        label: "K/0",
                        value: "K/0",
                        description: "",
                    },
                    {
                        label: "K/1",
                        value: "K/1",
                        description: "",
                    },
                    {
                        label: "K/2",
                        value: "K/2",
                        description: "",
                    },
                    {
                        label: "K/3",
                        value: "K/3",
                        description: "",
                    },
                ],
            },
            {
                type: "button-group",
                color: "success",
                name: "earningPeriod",
                label: "Masa Penghasilan",
                value: "12",
                itemClassname: "rounded-full py-0",
                items: [
                    {
                        label: "1",
                        value: "1",
                        description: "",
                    },
                    {
                        label: "2",
                        value: "2",
                        description: "",
                    },
                    {
                        label: "3",
                        value: "3",
                        description: "",
                    },
                    {
                        label: "4",
                        value: "4",
                        description: "",
                    },
                    {
                        label: "5",
                        value: "5",
                        description: "",
                    },
                    {
                        label: "6",
                        value: "6",
                        description: "",
                    },
                    {
                        label: "7",
                        value: "7",
                        description: "",
                    },
                    {
                        label: "8",
                        value: "8",
                        description: "",
                    },
                    {
                        label: "9",
                        value: "9",
                        description: "",
                    },
                    {
                        label: "10",
                        value: "10",
                        description: "",
                    },
                    {
                        label: "11",
                        value: "11",
                        description: "",
                    },
                    {
                        label: "12",
                        value: "12",
                        description: "",
                    },
                ],
            },
        ],
        earnings: [
            {
                type: "money",
                name: "salary",
                label: "Gaji/Pensiun atau THT/JHT",
                value: "0",
                classNames: {
                    input: "text-right",
                    mainWrapper: "w-full",
                    label: "text-xs w-full",
                },
            },
            {
                type: "money",
                name: "allowance",
                label: "Tunjangan Lainnya, Uang Lembur dan Sebagainya",
                value: "0",
                classNames: {
                    input: "text-right",
                    mainWrapper: "w-full",
                    label: "text-xs w-full",
                },
            },
            {
                type: "money",
                name: "honorarium",
                label: "Honorarium dan Imbalan Lainnya",
                value: "0",
                classNames: {
                    input: "text-right",
                    mainWrapper: "w-full",
                    label: "text-xs w-full",
                },
            },
            {
                type: "money",
                name: "premiAsuransi",
                label: "Premi Asuransi yang dibayar Pemberi Kerja",
                value: "0",
                classNames: {
                    input: "text-right",
                    mainWrapper: "w-full",
                    label: "text-xs w-full",
                },
            },
            {
                type: "money",
                name: "natura",
                label: "Natura dan Kenikmatan Lainnya",
                value: "0",
                classNames: {
                    input: "text-right",
                    mainWrapper: "w-full",
                    label: "text-xs w-full",
                },
            },
            {
                type: "money",
                name: "tantiem",
                label: "Tantiem, Bonus, Gratifikasi, Jasa Produksi dan THR",
                value: "0",
                classNames: {
                    input: "text-right",
                    mainWrapper: "w-full",
                    label: "text-xs w-full",
                },
            },
            {
                isReadOnly: true,
                type: "money",
                name: "gross",
                label: "Penghasilan Bruto",
                value: "0",
                classNames: {
                    input: "text-right",
                    mainWrapper: "w-full",
                    label: "text-sm font-bold w-full",
                },
            },
        ],
        deductions: [
            {
                isReadOnly: true,
                type: "money",
                name: "positionCost",
                label: "Biaya Jabatan",
                value: "0",
                classNames: {
                    input: "text-right",
                    mainWrapper: "w-full",
                    label: "text-xs w-full",
                },
            },
            {
                isReadOnly: false,
                type: "money",
                name: "employeeJPAndJHT",
                label: "Iuran pensiun atau iuran THT/JHT",
                value: "0",
                classNames: {
                    input: "text-right",
                    mainWrapper: "w-full",
                    label: "text-xs w-full",
                },
            },
        ],
        result: [
            {
                isReadOnly: true,
                type: "money",
                name: "annualGross",
                label: "Penghasilan Bruto Setahun",
                value: "0",
                classNames: {
                    input: "text-right",
                    mainWrapper: "w-full",
                    label: "text-xs w-full",
                },
            },
            {
                isReadOnly: true,
                type: "money",
                name: "annualPositionCost",
                label: "Biaya Jabatan Setahun",
                value: "0",
                classNames: {
                    input: "text-right",
                    mainWrapper: "w-full",
                    label: "text-xs w-full",
                },
            },
            {
                isReadOnly: true,
                type: "money",
                name: "annualPensiun",
                label: "Iuran Pensiun Setahun",
                value: "0",
                classNames: {
                    input: "text-right",
                    mainWrapper: "w-full",
                    label: "text-xs w-full",
                },
            },
            {
                isReadOnly: true,
                type: "money",
                name: "annualDeductionAmount",
                label: "Jumlah Pengurang Setahun",
                value: "0",
                classNames: {
                    input: "text-right",
                    mainWrapper: "w-full",
                    label: "text-xs w-full",
                },
            },
            {
                isReadOnly: true,
                type: "money",
                name: "annualNetIncome",
                label: "Penghasilan Neto",
                value: "0",
                classNames: {
                    input: "text-right",
                    mainWrapper: "w-full",
                    label: "text-xs w-full",
                },
            },
            {
                isReadOnly: true,
                type: "money",
                name: "annualNetIncomeBeforePreviousYear",
                label: "Penghasilan Neto Masa Sebelumnya",
                value: "0",
                classNames: {
                    input: "text-right",
                    mainWrapper: "w-full",
                    label: "text-xs w-full",
                },
            },
            {
                isReadOnly: true,
                type: "money",
                name: "annualizedNetIncome",
                label: "Penghasilan Neto Setahun/Disetahunkan",
                value: "0",
                classNames: {
                    input: "text-right",
                    mainWrapper: "w-full",
                    label: "text-xs w-full",
                },
            },
            {
                isReadOnly: true,
                type: "money",
                name: "ptkpAmount",
                label: "Penghasilan Tidak Kena Pajak (PTKP)",
                value: "0",
                classNames: {
                    input: "text-right",
                    mainWrapper: "w-full",
                    label: "text-xs w-full",
                },
            },
            {
                isReadOnly: true,
                type: "money",
                name: "pkpAmount",
                label: "Penghasilan Kena Pajak (PKP)",
                value: "0",
                classNames: {
                    input: "text-right",
                    mainWrapper: "w-full",
                    label: "text-xs w-full",
                },
            },
            {
                isReadOnly: true,
                type: "money",
                name: "pph21Pkp",
                label: "PPh Pasal 21 atas PKP",
                value: "0",
                classNames: {
                    input: "text-right",
                    mainWrapper: "w-full",
                    label: "text-xs w-full",
                },
            },
            {
                isReadOnly: true,
                type: "money",
                name: "pph21BeforePreviousYear",
                label: "PPh Pasal 21 Dipotong Masa Sebelumnya",
                value: "0",
                classNames: {
                    input: "text-right",
                    mainWrapper: "w-full",
                    label: "text-xs w-full",
                },
            },
        ],
    },
    PPH_21_TER_STATE: {
        personal: [
            {
                type: "text",
                name: "name",
                label: "Nama Karyawan",
                value: "",
                classNames: {
                    inputWrapper: "bg-transparent p-[0.1rem]",
                },
            },
            {
                type: "button-group",
                color: "success",
                name: "npwp",
                label: "NPWP",
                value: "Ya",
                itemClassname: "rounded-full py-0",
                items: [
                    {
                        label: "Ya",
                        value: "Ya",
                        description: "",
                    },
                    {
                        label: "Tidak",
                        value: "Tidak",
                        description: "",
                    },
                ],
            },
            {
                type: "button-group",
                color: "success",
                name: "taxMethod",
                label: "Tunjangan Pajak",
                value: "GROSS",
                itemClassname: "rounded-full py-0",
                items: [
                    {
                        label: "Gross",
                        value: "GROSS",
                        description: "",
                    },
                    {
                        label: "Gross Up",
                        value: "GROSS UP",
                        description: "",
                    },
                ],
            },
            {
                type: "button-group",
                color: "success",
                name: "ptkpStatus",
                label: "Status PTKP",
                value: "TK/0",
                itemClassname: "rounded-full py-0",
                items: [
                    {
                        label: "TK/0",
                        value: "TK/0",
                        description: "",
                    },
                    {
                        label: "TK/1",
                        value: "TK/1",
                        description: "",
                    },
                    {
                        label: "TK/2",
                        value: "TK/2",
                        description: "",
                    },
                    {
                        label: "TK/3",
                        value: "TK/3",
                        description: "",
                    },
                    {
                        label: "K/0",
                        value: "K/0",
                        description: "",
                    },
                    {
                        label: "K/1",
                        value: "K/1",
                        description: "",
                    },
                    {
                        label: "K/2",
                        value: "K/2",
                        description: "",
                    },
                    {
                        label: "K/3",
                        value: "K/3",
                        description: "",
                    },
                ],
            },
        ],
        earnings: [
            {
                type: "money",
                name: "salary",
                label: "Gaji/Pensiun atau THT/JHT",
                value: "0",
                classNames: {
                    input: "text-right",
                    mainWrapper: "w-full",
                    label: "text-xs w-full",
                },
            },
            {
                type: "money",
                name: "allowance",
                label: "Tunjangan Lainnya, Uang Lembur dan Sebagainya",
                value: "0",
                classNames: {
                    input: "text-right",
                    mainWrapper: "w-full",
                    label: "text-xs w-full",
                },
            },
            {
                type: "money",
                name: "honorarium",
                label: "Honorarium dan Imbalan Lainnya",
                value: "0",
                classNames: {
                    input: "text-right",
                    mainWrapper: "w-full",
                    label: "text-xs w-full",
                },
            },
            {
                type: "money",
                name: "premiAsuransi",
                label: "Premi Asuransi yang dibayar Pemberi Kerja",
                value: "0",
                classNames: {
                    input: "text-right",
                    mainWrapper: "w-full",
                    label: "text-xs w-full",
                },
            },
            {
                type: "money",
                name: "natura",
                label: "Natura dan Kenikmatan Lainnya",
                value: "0",
                classNames: {
                    input: "text-right",
                    mainWrapper: "w-full",
                    label: "text-xs w-full",
                },
            },
            {
                type: "money",
                name: "tantiem",
                label: "Tantiem, Bonus, Gratifikasi, Jasa Produksi dan THR",
                value: "0",
                classNames: {
                    input: "text-right",
                    mainWrapper: "w-full",
                    label: "text-xs w-full",
                },
            },
            {
                isReadOnly: true,
                type: "money",
                name: "gross",
                label: "Penghasilan Bruto",
                value: "0",
                classNames: {
                    input: "text-right",
                    mainWrapper: "w-full",
                    label: "text-sm font-bold w-full",
                },
            },
        ],
        result: [
            {
                isReadOnly: true,
                type: "string",
                labelPlacement: "outside-left",
                name: "terCategory",
                label: "Kategori TER",
                value: "",
                classNames: {
                    input: "text-right",
                    mainWrapper: "w-full",
                    label: "text-xs w-full",
                },
            },
            {
                isReadOnly: true,
                type: "money",
                name: "terStartRange",
                label: "Penghasilan Bruto Mulai",
                value: "0",
                classNames: {
                    input: "text-right",
                    mainWrapper: "w-full",
                    label: "text-xs w-full",
                },
            },
            {
                isReadOnly: true,
                type: "money",
                name: "terEndRange",
                label: "Penghasilan Bruto Sampai",
                value: "0",
                classNames: {
                    input: "text-right",
                    mainWrapper: "w-full",
                    label: "text-xs w-full",
                },
            },
            {
                isReadOnly: true,
                type: "string",
                labelPlacement: "outside-left",
                name: "terRate",
                label: "Tarif Efektif Rata-rata (TER) Bulanan",
                value: "0%",
                classNames: {
                    input: "text-right",
                    mainWrapper: "w-full",
                    label: "text-xs w-full",
                },
            },
            {
                isReadOnly: true,
                type: "money",
                name: "pph21Monthly",
                label: "PPh 21 Terutang bulan ini",
                value: "0",
                classNames: {
                    input: "text-right",
                    mainWrapper: "w-full",
                    label: "text-xs w-full",
                },
            },
        ],
    },
    PPN_STATE: {
        settings: [
            {
                name: "name",
                label: "Nama Barang/Jasa",
                labelPlacement: "outside",
                placeholder: "Barang/Jasa",
                type: "text",
                variant: "bordered",
                value: "",
                classNames: {
                    inputWrapper: "bg-transparent",
                },
            },
            {
                name: "type",
                type: "button-group",
                label: "Harga Total Include PPN",
                color: "success",
                itemClassname: "rounded-full py-1",
                value: "Tidak",
                items: [
                    {
                        label: "Tidak",
                        value: "Tidak",
                        description: "",
                    },
                    { label: "Ya", value: "Ya", description: "" },
                ],
            },
        ],
        components: [
            {
                name: "price", label: "Harga Satuan", type: "money", value: "0",
                labelPlacement: "outside",
                classNames: {
                    input: "text-right min-w-300",
                    mainWrapper: "w-full",
                    label: "text-sm text-left w-full",
                },
            },
            {
                name: "quantity",
                label: "Quantity",
                type: "money",
                value: "1",
                labelPlacement: "outside",
                classNames: {
                    input: "text-right min-w-300",
                    mainWrapper: "w-full",
                    label: "text-sm text-left w-full",
                },
            },
            {
                name: "discount",
                label: "Discount",
                type: "money",
                value: "0",
                labelPlacement: "outside",
                classNames: {
                    input: "text-right min-w-300",
                    mainWrapper: "w-full",
                    label: "text-sm text-left w-full",
                },
            },
        ],
        result: [
            {
                isReadOnly: true, name: "dpp", label: "DPP", type: "money", value: "0",
                labelPlacement: "outside",
                classNames: {
                    input: "text-right min-w-300",
                    mainWrapper: "w-full",
                    label: "text-sm text-left w-full",
                },
            },
            {
                isReadOnly: true, name: "ppn", label: "PPN", type: "money", value: "0",
                labelPlacement: "outside",
                classNames: {
                    input: "text-right min-w-300",
                    mainWrapper: "w-full",
                    label: "text-sm text-left w-full",
                },
            },
            {
                isReadOnly: true, name: "total",
                label: "Harga Total",
                type: "money",
                value: "0",
                labelPlacement: "outside",
                classNames: {
                    input: "text-right min-w-300",
                    mainWrapper: "w-full",
                    label: "text-sm text-left w-full",
                },
            },
        ],
    }
}

export {
    INITIAL_STATE,
}