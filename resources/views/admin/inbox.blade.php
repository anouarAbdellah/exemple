@extends('admin.app')
@section('content')

    <div class="inbox-head">
        <h3>Inbox</h3>
    </div>
    <div class="inbox-body">
        <div class="mail-option">


            <div class="btn-group">
                <a data-original-title="Refresh" data-placement="top" href="/admin" class="btn mini tooltips">
                    <i class=" fas fa-sync-alt"></i>
                </a>
            </div>

            {{ $emails->links() }}
        </div>
        @foreach($emails as $email)
        <a href="/admin/email/{{ $email->id }}" style="color: #000000;">
        <table class="table table-inbox table-hover">
            <tbody>
            <tr class="{{ $email->seen == 0 ? "unread" : 'read' }}">
                <td class="inbox-small-cells">
                    <a href="/admin/deletemail/{{ $email->id }}" style="color: red;"><i class="fa fa-trash"></i> </a>
                </td>
                <td class="view-message  dont-show">{{ $email->email }}</td>
                <td class="view-message ">{{ $email->subject }}</td>
                <td class="view-message  text-right">{{ $email->created_at }}</td>
            </tr>
            </tbody>
        </table>
        </a>
        @endforeach
    </div>
    <script>
        $("#inbox-li").addClass("active");
    </script>
@endsection