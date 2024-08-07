import Svg, { G, Mask, Path, Rect } from 'react-native-svg';

function createDestruction(size: number) {
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <Rect width="24" height="24" rx="12" fill="#FF3F33" />
      <Mask
        id="mask0"
        style={{ maskType: 'alpha' }}
        maskUnits="userSpaceOnUse"
        x="5"
        y="5"
        width="14"
        height="14">
        <Rect x="5" y="5" width="14" height="14" fill="#D9D9D9" />
      </Mask>
      <G mask="url(#mask0)">
        <Path
          d="M8.06258 17.3172C7.77918 17.3172 7.53816 17.218 7.33954 17.0194C7.14101 16.8209 7.04175 16.5799 7.04175 16.2964V14.1258C7.04175 13.8423 7.14101 13.6013 7.33954 13.4028C7.53816 13.2042 7.77918 13.105 8.06258 13.105H15.9376C16.221 13.105 16.462 13.2042 16.6606 13.4028C16.8592 13.6013 16.9584 13.8423 16.9584 14.1258V16.2964C16.9584 16.5799 16.8592 16.8209 16.6606 17.0194C16.462 17.218 16.221 17.3172 15.9376 17.3172H8.06258ZM8.09627 16.4422H15.9039C15.9563 16.4422 15.9993 16.4254 16.033 16.3918C16.0666 16.3581 16.0834 16.3151 16.0834 16.2628V14.1595C16.0834 14.1071 16.0666 14.0641 16.033 14.0304C15.9993 13.9968 15.9563 13.98 15.9039 13.98H8.09627C8.04387 13.98 8.00085 13.9968 7.96721 14.0304C7.93357 14.0641 7.91675 14.1071 7.91675 14.1595V16.2628C7.91675 16.3151 7.93357 16.3581 7.96721 16.3918C8.00085 16.4254 8.04387 16.4422 8.09627 16.4422ZM11.3742 8.97234L12.45 7.07199C12.4948 6.99197 12.5563 6.93437 12.6345 6.89917C12.7126 6.86408 12.7917 6.85625 12.8717 6.87569C12.9517 6.89514 13.0196 6.92878 13.0753 6.97661C13.131 7.02444 13.1686 7.09624 13.188 7.19201L13.5504 9.35253L15.6672 8.76817C15.763 8.7427 15.8475 8.74455 15.9207 8.77371C15.994 8.80288 16.0531 8.85076 16.098 8.91736C16.1428 8.98386 16.1662 9.05712 16.1681 9.13713C16.17 9.21715 16.1436 9.29721 16.089 9.37732L14.8259 11.1665L15.3554 11.4705C15.4578 11.5296 15.5253 11.6182 15.5578 11.7363C15.5904 11.8545 15.5771 11.9649 15.518 12.0674C15.4589 12.1697 15.3712 12.2372 15.2549 12.2698C15.1387 12.3023 15.0293 12.2891 14.9268 12.23L14.053 11.7375C13.9124 11.6575 13.8245 11.5417 13.7893 11.3903C13.7542 11.2389 13.7845 11.1007 13.8802 10.9758L14.5993 9.97071L12.8471 10.4553L12.5454 8.66828L11.658 10.2433L10.1783 9.19328L10.6629 10.9455L8.89267 11.2472L9.27416 11.4762C9.37654 11.5352 9.44401 11.6229 9.47658 11.7392C9.50915 11.8555 9.49588 11.9649 9.43677 12.0674C9.37766 12.1697 9.28996 12.2372 9.17369 12.2698C9.05741 12.3023 8.94803 12.2891 8.84556 12.23L7.27625 11.337C7.19623 11.2921 7.14106 11.2315 7.11073 11.1553C7.08049 11.079 7.0751 11.0008 7.09454 10.9208C7.11398 10.8408 7.14762 10.7729 7.19546 10.7172C7.24329 10.6615 7.31509 10.624 7.41085 10.6045L9.56014 10.2421L8.98133 8.12534C8.95596 8.02958 8.95688 7.94504 8.9841 7.87174C9.01142 7.79853 9.05838 7.73946 9.12498 7.69455C9.19148 7.64973 9.26473 7.62635 9.34475 7.6244C9.42476 7.62256 9.50482 7.64895 9.58494 7.70359L11.3742 8.97234Z"
          fill="white"
        />
      </G>
    </Svg>
  );
}

export default createDestruction;
