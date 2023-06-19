import React from 'react'
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
type Props = {
    text: string
    options: string[]

}

const DropDown = (props: Props) => {
    return (
        <Select>
            <SelectTrigger className="">
                <SelectValue placeholder={props.text} />
            </SelectTrigger>
            <SelectContent>
                {props.options.map((item, index) => (
                    <SelectItem key={index} value={item}>
                        {item}
                    </SelectItem>
                ))}
            </SelectContent>
        </Select >
    )
}

export default DropDown