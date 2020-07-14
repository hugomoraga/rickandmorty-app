import swal from 'sweetalert2';
export class SwalUtils {
    public static showSuccess(message: string): void {
        swal.fire('Operacion realizada con exito', message, 'success');
    }
    public static showCustomError(message: string): void {
        swal.fire('Ha ocurrido un error', message, 'error');
    }
}
